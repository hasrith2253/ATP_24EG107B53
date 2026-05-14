/* Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------

              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };


    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t */


const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
        let name1={...user};
        name1.name = "hasrith rao";  // name is a primitive data type so it will not change in original object
name1.preferences.theme = "light";  // preference is a nested object 
        console.log(user)
        console.log(name1);