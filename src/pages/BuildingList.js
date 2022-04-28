import BuildingDetail from "../components/BuildingDetail";

const buildingList = [
  {
    floors: 3,
    color: "green"
  }, {
    floors: 4,
    color: "red"
  }, {
    floors: 5,
    color: "blue"
  },
];

function BuildingList() {
  return (
    <>
      {buildingList.map((item) =>
        <BuildingDetail floors={item.floors} color={item.color} />
      )}
    </>
  );
}

export default BuildingList;