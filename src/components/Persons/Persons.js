import React from "react";
import Person from './Person/Person';

//We know that props will contain an array of persons which we want to transform into an array of JSX elements.
//Here keep in mind, we're already writing JSX, so we can even omit the parentheses here because we're not having a JSX expression here this is normal Javascript after all. It will contain JSX in the inside but that doesn't change the fact that props persons map is normal Javascript code we're calling.
//We know that props will contain an array of persons which we want to transform into an array of JSX elements, just as we did in app.js. ('props' => Simply an object giving us access to all the attributes we pass to our own components.)
const persons = (props) => props.persons.map((person,index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event,person.id)} />
      } );

export default persons;