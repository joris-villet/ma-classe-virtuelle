//format voulu

response.data = [
  listTeacher = {
  account:{
    teacher_id:1,
    teacher_name: alex
  },
  class1:{
    class_id:1,
    list1:{
      list_id:1,
      cards:{
        card1:{title, content},
        card2:{title, content},
        card3:{title, content},
        card4:{title, content},
        card5:{title, content}
      }
    },
  list2:{
    list_id:2,
    cards:{
      card1:{title, content},
      card2:{title, content},
      card3:{title, content},
      card4:{title, content},
      card5:{title, content}
    }
  },
  list3:{
    list_id:3,
    cards:{
      card1:{title, content},
      card2:{title, content},
      card3:{title, content},
      card4:{title, content},
      card5:{title, content},
    }
  },
  list4:{
    list_id:4,
    cards:{
      card1:{title, content},
      card2:{title, content},
      card3:{title, content},
      card4:{title, content},
      card5:{title, content},
    }
  },
  list5:{
    list_id:3,
    cards:{
      card1:{title, content},
      card2:{title, content},
      card3:{title, content},
      card4:{title, content},
      card5:{title, content},
    }
  }
  }
]



// Format actuel
{
  "isLogged": true,
  "account": {
    "id": 1,
    "first_name": "marie",
    "last_name": "durant",
    "birth_date": "1970-10-01T23:00:00.000Z",
    "email": "marie@truc.fr",
    "avatar": null,
    "role": "teacher"
  },
  "listsAndCards": [
    {
      "class_id": 1,
      "teacher_id": 1,
      "list_class": [
        {
          "list_id": 124,
          "list_title": "Monday    22 June     ",
          "all_card": [
            {
              "id": 1,
              "title": "les division",
              "content": "blablabla division",
              "position": 0,
              "list_id": 124,
              "label_id": 1,
              "class_id": 1,
              "title_label": "mathematique",
              "color_label": "blue"
            },
            {
              "id": 3,
              "title": "le participe passé",
              "content": "blablabla participe passé",
              "position": 0,
              "list_id": 124,
              "label_id": 2,
              "class_id": 1,
              "title_label": "français",
              "color_label": "yellow"
            }
          ]
        },
        {
          "list_id": 125,
          "list_title": "Tuesday   23 June     ",
          "all_card": [
            {
              "id": 2,
              "title": "les multiplication",
              "content": "blablabla multiplication",
              "position": 0,
              "list_id": 125,
              "label_id": 1,
              "class_id": 1,
              "title_label": "mathematique",
              "color_label": "blue"
            }
          ]
        },
        {
          "list_id": 126,
          "list_title": "Wednesday 24 June     ",
          "all_card": [
            {
              "id": 5,
              "title": "les division",
              "content": "blablabla",
              "position": 0,
              "list_id": 126,
              "label_id": 1,
              "class_id": 1,
              "title_label": "mathematique",
              "color_label": "blue"
            },
            {
              "id": 4,
              "title": "le passé composé",
              "content": "blablabla passé composé",
              "position": 0,
              "list_id": 126,
              "label_id": 1,
              "class_id": 1,
              "title_label": "mathematique",
              "color_label": "blue"
            }
          ]
        },
        {
          "list_id": 127,
          "list_title": "Thursday  25 June     ",
          "all_card": [
            {
              "id": 10,
              "title": "les soustraction",
              "content": "blablabla revision soustraction",
              "position": 0,
              "list_id": 127,
              "label_id": 1,
              "class_id": 1,
              "title_label": "mathematique",
              "color_label": "blue"
            },
            {
              "id": 9,
              "title": "le verbe etre",
              "content": "blablabla verbe etre",
              "position": 0,
              "list_id": 127,
              "label_id": 2,
              "class_id": 1,
              "title_label": "français",
              "color_label": "yellow"
            },
            {
              "id": 7,
              "title": "le verbe avoir",
              "content": "blablabla verbe avoir",
              "position": 0,
              "list_id": 127,
              "label_id": 2,
              "class_id": 1,
              "title_label": "français",
              "color_label": "yellow"
            },
            {
              "id": 6,
              "title": "le vocabulaire",
              "content": "blablabla vocabulaire anglais",
              "position": 0,
              "list_id": 127,
              "label_id": 3,
              "class_id": 1,
              "title_label": "anglais",
              "color_label": "red"
            }
          ]
        },
        {
          "list_id": 128,
          "list_title": "Friday    26 June     ",
          "all_card": [
            {
              "id": 8,
              "title": "revision dictee",
              "content": "blablabla where is a brian? brian in the kitchen",
              "position": 0,
              "list_id": 128,
              "label_id": 3,
              "class_id": 1,
              "title_label": "anglais",
              "color_label": "red"
            }
          ]
        }
      ]
    }
  ]
}



//retour test pgadmin

{ "124" : {
    "list_id":124,
    "list_title":"Monday    22 June     ",
    "all_card":{
      "1": {
        "id": 1, 
        "title": "les division",
        "content": "blablabla division",
        "list_id": 124,      "class_id": 1,
        "label_id": 1,
        "position": 0,
        "color_label": "blue",
        "title_label": "mathematique"},
      "3": {
        "id": 3,
        "title": "le participe passé",
        "content": "blablabla participe passé",
        "list_id": 124,
        "class_id": 1,
        "label_id": 2,
        "position": 0,
        "color_label": "yellow",
        "title_label": "français"}
    }
  },
  "125" : {
     "list_id":125,
     "list_title":"Tuesday   23 June     ",
     "all_card":{
       "2": {
         "id": 2,
         "title": "les multiplication",
         "content": "blablabla multiplication",
         "list_id": 125, "class_id": 1,
         "label_id": 1,
         "position": 0,
         "color_label": "blue",
         "title_label": "mathematique"
        }
      }
  },
  "126" : {
    "list_id":126,
    "list_title":"Wednesday 24 June     ",
    "all_card":{
      "4": {
        "id": 4,
        "title": "le passé composé",
        "content": "blablabla passé composé",
        "list_id": 126,
        "class_id": 1,
        "label_id": 1,
        "position": 0,
        "color_label": "blue",
        "title_label": "mathematique"
      },
      "5": {"id": 5, "title": "les division", "content": "blablabla", "list_id": 126, "class_id": 1, "label_id": 1, "position": 0, "color_label": "blue", "title_label": "mathematique"}}}, "127" : {"list_id":127,"list_title":"Thursday  25 June     ","all_card":{"6": {"id": 6, "title": "le vocabulaire", "content": "blablabla vocabulaire anglais", "list_id": 127, "class_id": 1, "label_id": 3, "position": 0, "color_label": "red", "title_label": "anglais"}, "7": {"id": 7, "title": "le verbe avoir", "content": "blablabla verbe avoir", "list_id": 127, "class_id": 1, "label_id": 2, "position": 0, "color_label": "yellow", "title_label": "français"}, "9": {"id": 9, "title": "le verbe etre", "content": "blablabla verbe etre", "list_id": 127, "class_id": 1, "label_id": 2, "position": 0, "color_label": "yellow", "title_label": "français"}, "10": {"id": 10, "title": "les soustraction", "content": "blablabla revision soustraction", "list_id": 127, "class_id": 1, "label_id": 1, "position": 0, "color_label": "blue", "title_label": "mathematique"}}}, "128" : {"list_id":128,"list_title":"Friday    26 June     ","all_card":{"8": {"id": 8, "title": "revision dictee", "content": "blablabla where is a brian? brian in the kitchen", "list_id": 128, "class_id": 1, "label_id": 3, "position": 0, "color_label": "red", "title_label": "anglais"}}} }

{ "1" : {"id":1,"title":"les division","content":"blablabla division","position":0,"list_id":124,"label_id":1,"class_id":1,"title_label":"mathematique","color_label":"blue"},
"3" : {"id":3,"title":"le participe passé","content":"blablabla participe passé","position":0,"list_id":124,"label_id":2,"class_id":1,"title_label":"français","color_label":"yellow"} 
}