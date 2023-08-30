import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponens = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });
  return <div>{cardComponens}</div>;
};

export default CardList;
