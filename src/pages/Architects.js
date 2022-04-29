import Architect from "../components/Architect";

// JSON JavaScript Object Notation

export default function Architects(){
  const architects = [
    {
      name: "Tiburcio",
      firstSurname: "Cruz",
      secondSurname: "Ravelo"
    },{
      name: "Yordan",
      firstSurname: "Tolete",
      secondSurname: "Desgracia"
    },{
      name: "Yojan",
      firstSurname: "Somalí"
    },
  ];

  return(
    <>
      {
        architects.map((item) => 
        <Architect name={item.name} firstSurname={item.firstSurname} secondSurname={item.secondSurname} />)
      }
    </>
  );
}