import { Vector2 } from '../../../lib/Vector2'
import { Component } from '../../Component'

export class Transform extends Component {
  position = new Vector2(0, 0)
  scale = new Vector2(50, 50)
  
  /**
   * On component creating
   */
  create () {
    // log
    // console.log('component create')
  }
  
  /**
   * On component start
   */
  start () {
    // log
    // console.log('component start')
  }
  
  /**
   * On component update
   */
  update () {
  }
}