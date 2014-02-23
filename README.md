#### todoify [![Build Status](https://travis-ci.org/abruzzi/todos.png?branch=master)](https://travis-ci.org/abruzzi/todos)


Todoify is a jQuery plugin for make a `todo` list easier.

#### Usage

The simplest way to make a `todo` list is using:

```js
$("#note-input").todoify({
    container: "#note-todos"
});
```

This will make `input#note-input` into a `todo-fy` widget, and you can then `add`, `remove` items from the todo list. If you have already got some data, you can use them by the `data` option:

```js
var data = ["foo", "bar"];

$("#item-input").todoify({
    data: data,
    container: "#item-todos"
});
```

#### interact with server

If you have restful API, you can reterive them by:

```json
[
  {
    "description": "和西安Office的同事们分享jQuery和Jasmine",
    "id": 1
  },
  {
    "description": "找客户那边的BA确认RCA-1101的需求",
    "id": 2
  },
  {
    "description": "让高亮还钱",
    "id": 3
  },
  {
    "description": "黑王欢",
    "id": 4
  }
]
```

you want use the `description` as the item, retrieve and render them:

```js
$("#item-input").todoify({
    data: "/todos",
    dataKey: "description",
    container: "#item-todos"
});
```

But for now, it doesn't support all the `CURD` aginest a resource, I'm working on it.
