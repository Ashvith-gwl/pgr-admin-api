const validateCategory = {
    "title": "Category Validate",
    "description": "Will validate the requests of PGR complaints category",
    "type": "object",
    "properties": {
        "category_name": {
            "description": "It should be text and should be a primary key",
            "type": "string"
        }
    },
    "required": ["category_name"]
}

export default validateCategory;