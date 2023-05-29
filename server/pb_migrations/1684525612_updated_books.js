migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  // remove
  collection.schema.removeField("kl1tiosv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "88mcrz7e",
    "name": "cover_image_src",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

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

  // remove
  collection.schema.removeField("88mcrz7e")

  return dao.saveCollection(collection)
})
