/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_fi1FSiz` ON `users_details` (`user`)",
    "CREATE INDEX `idx_lYHyBvS` ON `users_details` (\n  `github`,\n  `linkedin`,\n  `x`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_fi1FSiz` ON `users_details` (`user`)"
  ]

  return dao.saveCollection(collection)
})
