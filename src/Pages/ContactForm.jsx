import React from 'react';
import { Form } from "react-router-dom";


export  function ContactForm() {
    const contact = {
      first: "Your",
      last: "Name",
      Phone_Number: "Phone Number",
      Git_Hub: "Git Hub",
      Message: "Some notes",
      favorite: true,
    };
    return (
        <div id="contact">
         <div>
            Contact Us
            </div>   
          <div>
            <img
              key={"https://th.bing.com/th/id/R.a3b0b09b8d1dbb8cc490c71feba1fae2?rik=9I92GX202hihMQ&riu=http%3a%2f%2fb.vimeocdn.com%2fps%2f497%2f497076_300.jpg&ehk=Gl%2b0vCDN9WqpwP2SFtBmyMGOBAL4g8cBSXIS6weC0pg%3d&risl=&pid=ImgRaw&r=0"}
              src={"https://th.bing.com/th/id/R.a3b0b09b8d1dbb8cc490c71feba1fae2?rik=9I92GX202hihMQ&riu=http%3a%2f%2fb.vimeocdn.com%2fps%2f497%2f497076_300.jpg&ehk=Gl%2b0vCDN9WqpwP2SFtBmyMGOBAL4g8cBSXIS6weC0pg%3d&risl=&pid=ImgRaw&r=0" || null}
            />
          </div>
    
          <div>
            <h1>
              {contact.first || contact.last ? (
                <>
                  {contact.first} {contact.last}
                </>
              ) : (
                <i>No Name</i>
              )}{" "}
              
            </h1>
    
            {contact.twitter && (
              <p>
                <a
                  target="_blank"
                  href={`https://github.com/${contact.twitter}`}
                >
                  {contact.twitter}
                </a>
              </p>
            )}
    
            {contact.notes && <p>{contact.notes}</p>}
    
            <div>
              <Form action="edit">
                <button type="submit">Edit</button>
              </Form>
              <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                  if (
                    !confirm(
                      "Please confirm you want to delete this record."
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit">Delete</button>
              </Form>
            </div>
          </div>
         <div>
         <p>Address</p>
                Plot 266, Federal Mortgage Bank Building,
                Tafawa Balewa Way, Central Business District,
                Abuja, Nigeria.
         </div>

        </div>
      );
    }
