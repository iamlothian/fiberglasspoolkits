
export type EntityId<E extends Entity> = string

export class Entity {
  entityId:EntityId<Entity>
  title:string
  description:string
}
