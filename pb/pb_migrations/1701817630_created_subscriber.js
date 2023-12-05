/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1p5euezfrt673ut",
    "created": "2023-12-05 23:07:10.132Z",
    "updated": "2023-12-05 23:07:10.132Z",
    "name": "subscriber",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "isyctkix",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1p5euezfrt673ut");

  return dao.deleteCollection(collection);
})
