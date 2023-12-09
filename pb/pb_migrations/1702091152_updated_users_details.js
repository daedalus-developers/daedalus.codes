/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.listRule = null
  collection.viewRule = "@request.auth.id != user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.listRule = "@request.auth.id != user.id"
  collection.viewRule = null

  return dao.saveCollection(collection)
})
