/**
 * Scene
 * @class Scene
 */
 class Scene {
  /**
   * id of entity
   * @type {String}
   */
  id = null

  /**
   * Entity manager
   * @type {EntityManager}
   */
  entityManager = new EntityManager()

  /**
   * On Create new Scene
   */
  constructor () {
    this.id = this.constructor.name
  }

  /**
   * Set id
   * @param  {String} id
   */
  setId (id) {
    this.id = id
  }

  /**
   * Create new entity
   * @param  {Entity} entity
   */
   createEntity (entity, id = '') {
    this.entityManager.add(entity, id)
  }
  
  /**
   * Preload
   */
  preload () {}
  
  /**
   * Preload
   */
  create () {}

  /**
   * Update
   */
  update () {}
}

/**
 * SceneManager
 * @class SceneManager
 */
 class SceneManager {
   scenes = []

  /**
   * On Create new SceneManager
   */
  constructor () {
  }
  
  /**
   * Add new scene
   * @param  {Scene} scene
   * @return void
   */
  add (scene, id = undefined) {
    this.scenes.push(scene)
    if (id) scene.setId(id)
  }

  /**
   * Get scene by id
   * @param  {} id
   * @return {scene}
   */
  get (id) {
    return this.scenes.find(scene => scene.name === id)
  }
}