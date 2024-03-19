import {Form,NavLink, Link, Outlet,useLoaderData} from 'react-router-dom'
import {getContacts,createContacts} from '../contacts'
// import '../main.css'
import { redirect, useNavigation } from 'react-router-dom';

export default function Root() {
 const {contact} = useLoaderData();
 const navigation = useNavigation();
 
 console.log(contact);
    return (
      <>
        <div id="sidebar"  >
          <h1>React Router Contacts</h1>
         
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {contact.length ? (
            <ul>
              {contact.map((contact) => (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}  className={({isActive, isPending})=> isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} - {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                   
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        </div>
        <div id="detail" className={navigation.state==='loading'?'loading':''}>
            <Outlet/>
        </div>
      </>
    );
  }


  export async function loader(){
    const contact = await getContacts();
    return {contact}
  }

export async function action() {
  const contact = await createContacts(1);
  console.log("create",contact)
  return redirect(`/contacts/${contact.id}/edit`);
}

