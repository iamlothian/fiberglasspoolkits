
export type EntityId<E extends Entity> = string

export class Entity {
  entityId:EntityId<Entity> = undefined
  title:string              = ""
  description:string        = ""
}
