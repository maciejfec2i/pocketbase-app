migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  collection.createRule = null

  return dao.saveCollection(collection)
})
