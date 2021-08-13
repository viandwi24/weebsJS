/**
 * Entity
 * @class Entity
 */
 class Component {
  /**
   * id of entity
   * @type {String}
   */
  id = null

  /**
   * On Create new Component
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
   * Set state
   * @param  {string} key
   * @param  {any} value
   */
  setState (key, value = undefined) {
    if (typeof key === 'string')
    {
      this[key] = value
    } else {
      for (const property in key) {
        this[property] = key[property]
      }
    }
  }

  /**
   * Set state
   * @param  {string} key
   * @param  {any} value
   */
  getState (value = undefined, defaultValue = undefined) {
    if (value) {
      return (typeof this[value] !== 'undefined') ? this[value] : defaultValue
    } else {
      const states = {}
      const a = Object.getOwnPropertyNames(this)
      for (let i = 0; i < a.length; i++) {
        const b = a[i];
        if (typeof this[b] !== 'undefined') states[b] = this[b]
      }
      return states
    }
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

/**
 * Entity
 * @class Entity
 */
 class ComponentManager {
   components = []

  /**
   * On Create new ComponentManager
   */
  constructor () {
  }
  
  /**
   * Add new component
   * @param  {Component} component
   * @return void
   */
  add (component, id = undefined) {
    this.components.push(component)
    if (id) component.setId(id)
  }

  /**
   * Get component by id
   * @param  {} id
   * @return {Component}
   */
   get (id) {
    if (typeof id === 'string') {
      return this.components.find(component => component.id === id)
    } else {
      return this.components.find(component => component.id === id.name)
    }
  }
}