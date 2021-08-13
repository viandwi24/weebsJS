/**
 * Entity Manager
 * @class EntityManager
 */
class EntityManager {

  entities = []
  
  /**
   * Add new entity
   * @param  {Entity} entity
   * @return void
   */
  add (entity, name = undefined) {
    this.entities.push(entity)
    if (name) entity.setId(name)
  }
  
  /**
   * Get entity by id
   * @param  {} id
   * @return {Entity}
   */
  get (id) {
    if (typeof id === 'string') {
      return this.entities.find(entity => entity.id === id)
    } else {
      return this.entities.find(entity => entity.id === id.name)
    }
  }
  
  /**
   * Run lifecycle
   * @param  {string} entityId
   * @param  {string} method
   * @param  {object} context
   */
  runLifeCycle (method, context) {
    for (let i = 0; i < this.entities.length; i++) {
      const entity = this.entities[i]

      // entity
      try {
        if (typeof entity[method] === 'function') entity[method](context)
      } catch (error) {
        console.warn(`Error on ${method} entity`, entity)
        console.error(error)
      }

      // component
      for (let j = 0; j < entity.componentManager.components.length; j++) {
        const component = entity.componentManager.components[i]
        try {
          if (typeof component[method] === 'function') component[method](context)
        } catch (error) {
          console.warn(`Error on ${method} component`, component)
          console.error(error)
        }
      }
    }
  }
  
  /**
   * Get Entity has a component
   * @param  {} component
   */
  getEntityHasComponent (component) {
    const components = (typeof component === 'string') ? [component] : component
    return this.entities.filter(entity => {
      let foundCount = 0 
      
      for (let i = 0; i < components.length; i++) {
        const component = components[i];
        if ((entity.getComponent(component) !== undefined)) {
          foundCount++
        }
      }

      return (foundCount === components.length)
    })
  }
}
  

/**
 * Entity
 * @class Entity
 */
class Entity {
  /**
   * id of entity
   * @type {String}
   */
  id = null

  /**
   * component manager
   * @type {ComponentManager}
   */
  componentManager = new ComponentManager()


  /**
   * On Create new Entity
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
   * Add Component
   * @param  {String} id
   */
  addComponent (component, id = undefined) {
    return this.componentManager.add(component, id)
  }

  /**
   * Get component
   * @param  {String} id
   */
  getComponent (id) {
    return this.componentManager.get(id)
  }
  
  /**
   * Create
   */
  create () {}
  
  /**
   * Start
   */
  start () {}

  /**
   * Update
   */
  update () {}
}