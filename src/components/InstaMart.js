import {memo, useContext, useState} from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import UserContext from "../utils/UserContext";

const Section = memo(
  ({title, whoHaveToShow, setWhoHaveToShow, description}) => {
    const {user} = useContext(UserContext);

    function handleVisibility() {
      if (whoHaveToShow === title) {
        setWhoHaveToShow("Nothing");
      } else {
        setWhoHaveToShow(title);
      }
    }
    return (
      <div
        onClick={handleVisibility}
        className={`transition-all ${
          whoHaveToShow === title ? "h-56" : "h-16"
        } overflow-hidden rounded-md p-4 m-4 shadow-md border-2`}
      >
        <h1 className="font-['mySans'] text-2xl flex justify-between px-5">
          {title}
          <span className="text-base font-bold font-[Kalnia]">
            {user.name}-{user.email}
          </span>
          {whoHaveToShow === title ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </h1>
        {whoHaveToShow === title && <p>{description}</p>}
      </div>
    );
  }
);

const InstaMart = () => {
  const {user,setUser} = useContext(UserContext)
  const [whoHaveToShow, setWhoHaveToShow] = useState("");
  return (
    <>
      <div className="h-full">
        <input className="border-2 p-1" onChange={(e)=>{
          setUser({
            ...user,
            name:e.target.value
          })
        }} value={user.name} type="text" />
        <input className="border-2 p-1" onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value
          })
        }} value={user.email} type="text" />
      </div>
      <div>
        <Section
          whoHaveToShow={whoHaveToShow}
          setWhoHaveToShow={setWhoHaveToShow}
          title={"About"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quisquam perspiciatis dicta. Asperiores porro soluta at suscipit exercitationem excepturi optio maxime reprehenderit architecto ex! Voluptates ab quaerat, sint dolore ullam doloribus ex repellendus autem praesentium facilis iure reiciendis cum. Necessitatibus, deleniti, atque saepe pariatur quam ullam libero eaque earum officia consectetur rem alias blanditiis itaque at tempora sit odio beatae quasi aliquid magnam nemo, numquam odit! Deserunt tempore modi hic obcaecati quo necessitatibus. Vitae, quidem. Iusto iste maxime reiciendis at perferendis nostrum atque molestias, libero laborum, minus id repudiandae veritatis! Delectus non repellendus facilis aliquid aperiam deserunt reprehenderit nisi."
        />

        <Section
          whoHaveToShow={whoHaveToShow}
          setWhoHaveToShow={setWhoHaveToShow}
          title={"Team"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quisquam perspiciatis dicta. Asperiores porro soluta at suscipit exercitationem excepturi optio maxime reprehenderit architecto ex! Voluptates ab quaerat, sint dolore ullam doloribus ex repellendus autem praesentium facilis iure reiciendis cum. Necessitatibus, deleniti, atque saepe pariatur quam ullam libero eaque earum officia consectetur rem alias blanditiis itaque at tempora sit odio beatae quasi aliquid magnam nemo, numquam odit! Deserunt tempore modi hic obcaecati quo necessitatibus. Vitae, quidem. Iusto iste maxime reiciendis at perferendis nostrum atque molestias, libero laborum, minus id repudiandae veritatis! Delectus non repellendus facilis aliquid aperiam deserunt reprehenderit nisi."
        />

        <Section
          whoHaveToShow={whoHaveToShow}
          setWhoHaveToShow={setWhoHaveToShow}
          title={"Produts"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quisquam perspiciatis dicta. Asperiores porro soluta at suscipit exercitationem excepturi optio maxime reprehenderit architecto ex! Voluptates ab quaerat, sint dolore ullam doloribus ex repellendus autem praesentium facilis iure reiciendis cum. Necessitatibus, deleniti, atque saepe pariatur quam ullam libero eaque earum officia consectetur rem alias blanditiis itaque at tempora sit odio beatae quasi aliquid magnam nemo, numquam odit! Deserunt tempore modi hic obcaecati quo necessitatibus. Vitae, quidem. Iusto iste maxime reiciendis at perferendis nostrum atque molestias, libero laborum, minus id repudiandae veritatis! Delectus non repellendus facilis aliquid aperiam deserunt reprehenderit nisi."
        />
        <Section
          whoHaveToShow={whoHaveToShow}
          setWhoHaveToShow={setWhoHaveToShow}
          title={"Gadgets"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quisquam perspiciatis dicta. Asperiores porro soluta at suscipit exercitationem excepturi optio maxime reprehenderit architecto ex! Voluptates ab quaerat, sint dolore ullam doloribus ex repellendus autem praesentium facilis iure reiciendis cum. Necessitatibus, deleniti, atque saepe pariatur quam ullam libero eaque earum officia consectetur rem alias blanditiis itaque at tempora sit odio beatae quasi aliquid magnam nemo, numquam odit! Deserunt tempore modi hic obcaecati quo necessitatibus. Vitae, quidem. Iusto iste maxime reiciendis at perferendis nostrum atque molestias, libero laborum, minus id repudiandae veritatis! Delectus non repellendus facilis aliquid aperiam deserunt reprehenderit nisi."
        />
      </div>
    </>
  );
};

export default InstaMart;
