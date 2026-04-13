import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){

  //component 함수에서 최상위에서 사용(if, for로 감싸지 말 것.), handleSelected 같은 내부 함수에서 호출하면 x.컴포넌트 함수에서 즉시 사용해야함.
  //첫번쨰 지정하는 것은 현재 상태 값.
  const [selectedTopic, setSelectedTopic] = useState(); 

  // TabButton 컴포넌트로 전달할 function(TabButton 컴포넌트에서 onClick 이벤트핸들러 통해 실행 된다.)
  // onSelect라는 props로 전달
  function handleSelect(selectedButton) {
    
    setSelectedTopic(selectedButton); // 컴포넌트 함수에 있는 useSate의 두번쨰 배열 -> 변경값 적용

  }

  //변수를 활용한 state 선택 없을때 처리(동적)
  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic) {
    tabContent = (
       <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
    )
  }

    return (
        <Section title="Excamples" id="examples">
          {/* button자체를 props로 넘기므로써 selectTopic같은 것을 props로 안받을 수 있다. buttons로 그냥 바로 처리를 가능하다. */}
          <Tabs buttons={ 
              <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton> 
              <TabButton isSelected={selectedTopic === 'jsx'} onClick={function() {handleSelect('jsx')}}>JSX</TabButton> 
              <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Porps</TabButton> 
              <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton> 
              </>
            }>
            {tabContent}
          </Tabs>
        
        </Section>
    )
}