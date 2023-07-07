migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // remove
  collection.schema.removeField("69wmurkg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elglafyc",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "982wpmqkq5d2bct",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "69wmurkg",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("elglafyc")

  return dao.saveCollection(collection)
})
