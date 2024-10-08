import CautionBox from "./components/caution-box";
import {
  CautionBoxGroup,
  CautionBoxHeading,
  CautionBoxList,
} from "./components/caution-box";

function App() {
  return (
    <CautionBox heading="Error">
      <CautionBoxGroup>
        <CautionBoxHeading>Heading 1</CautionBoxHeading>
        <CautionBoxList
          items={[
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nemo inventore totam similique in ducimus corrupti labore porro quis nihil?",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nemo inventore totam similique in ducimus corrupti labore porro quis nihil?",
          ]}
        />
      </CautionBoxGroup>
      <CautionBoxGroup>
        <CautionBoxHeading>Heading 2</CautionBoxHeading>
        <CautionBoxList
          items={[
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nemo inventore totam similique in ducimus corrupti labore porro quis nihil?",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nemo inventore totam similique in ducimus corrupti labore porro quis nihil?",
          ]}
        />
      </CautionBoxGroup>
    </CautionBox>
  );
}

export default App;
