migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // remove
  collection.schema.removeField("zytpkqib")

  return dao.saveCollection(collection)
})
