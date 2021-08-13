/**
 * 2d Game
 * @class Game2d
 */
class Game2D {
  /**
   * Default Options
   * @type {Object}
   */
  options = {
    size: {
      width: 800,
      height: 600
    }
  }

  /**
   * Time
   * @type {Object}
   */
  time = {
    last: 0,
    delta: 0,
    fps: 0,
    frame: 0
  }


  /**
   * Scene manager
   * @type {SceneManager}
   */
  sceneManager = new SceneManager()
  
  /**
   * Create new 2D Game
   * @param  {} options={}
   */
  constructor (options = {}) {
    this.options = Object.assign(this.options, options)
    this.systems = []
  }

  /**
   * Mount screen for display game
   * @param  {HTMLElement} screen
   */
  mount (screen) {
    this.screen = screen
    this.createScreen()
  }
  
  /**
   * Create screen for display game
   */
  createScreen () {
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.options.size.width
    this.canvas.height = this.options.size.height
    this.screen.appendChild(this.canvas)
  }
  
  /**
   * Clear screen
   */
  clearScreen () {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  getContext () {
    return {
      game: this,
      screen: this.screen,
      canvas: this.canvas,
      time: this.time,
      scene: this.activeScene,
      entityManager: this.activeScene.entityManager || {},
    }
  }

  start (mainScene) {
    const mainSceneId = mainScene.name
    const scene = new (this.sceneManager.get(mainSceneId))
    this.activeScene = scene

    // 
    const context = this.getContext()

    // create system
    for (let i = 0; i < this.systems.length; i++) {
      this.systems[i] = new (this.systems[i])(context)
    }

    // create scene
    try {
      if (typeof scene.create === 'function') scene.create(context)
    } catch (error) {
      console.warn(`Error on load scene`, scene)
      console.error(error)
    }
    scene.entityManager.runLifeCycle('create', context)

    // start scene
    try {
      if (typeof scene.start === 'function') scene.start(context)
    } catch (error) {
      console.warn(`Error on starting scene`, scene)
      console.error(error)
    }
    scene.entityManager.runLifeCycle('start', context)

    // run game loop
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  gameLoop (time) {
    const now = performance.now()
    this.time.delta = (now - this.time.last) / 1000
    this.time.fps = Math.round(1 / this.time.delta)
    

    // update entities
    this.clearScreen()
    if (this.activeScene) {
      const context = this.getContext()
      const scene = this.activeScene

      // update scene
      try {
        if (typeof scene.update === 'function') scene.update(context)
      } catch (error) {
        console.warn(`Error on update scene`, scene)
        console.error(error)
      }

      // update entities
      scene.entityManager.runLifeCycle('update', context)
    }

    // run system update
    this.clearScreen()
    for (let i = 0; i < this.systems.length; i++) {
      const context = this.getContext()
      const system = (this.systems[i]);
      system.execute(context)
    }


    // loop
    requestAnimationFrame(this.gameLoop.bind(this))
    this.time.last = performance.now()
    this.time.frame++
  }

  /**
   * Add scene
   * @param  {Scene} scene
   * @param  {} id=''
   */
  addScene (scenes, id = '') {
    for (let i = 0; i < scenes.length; i++) {
      const scene = scenes[i];
      this.sceneManager.add(scene, id)
    }
  }
  
  /**
   * register a system
   * @param  {System} systems
   */
  registerSystem (systems) {
    for (let i = 0; i < systems.length; i++) {
      const system = systems[i];
      this.systems.push(system)
    }
  }
}