/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ke436i7mqpn0g09",
    "created": "2023-12-05 23:01:29.607Z",
    "updated": "2023-12-05 23:01:29.607Z",
    "name": "users_details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ttt8not3",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "unzexa3t",
        "name": "bio",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6nndu0ox",
        "name": "details",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "tfg2ykwy",
        "name": "linkedin",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": [
            "linkedin.com"
          ]
        }
      },
      {
        "system": false,
        "id": "ovccqsrz",
        "name": "x",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": [
            "twitter.com"
          ]
        }
      },
      {
        "system": false,
        "id": "eyzsozn3",
        "name": "github",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": [
            "github.com"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_yL6nU7Q` ON `users_details` (\n  `x`,\n  `github`,\n  `linkedin`\n)",
      "CREATE UNIQUE INDEX `idx_fi1FSiz` ON `users_details` (`user`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09");

  return dao.deleteCollection(collection);
})
