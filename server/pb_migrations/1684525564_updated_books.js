migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // remove
  collection.schema.removeField("zytpkqib")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kl1tiosv",
    "name": "cover_image",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zytpkqib",
    "name": "cover_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("kl1tiosv")

  return dao.saveCollection(collection)
})
