/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.updateRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.updateRule = "@request.auth.id != user.id"

  return dao.saveCollection(collection)
})
