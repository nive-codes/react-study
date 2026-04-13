import {useState} from 'react'

import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';




function App() {

  //component 함수에서 최상위에서 사용(if, for로 감싸지 말 것.), handleSelected 같은 내부 함수에서 호출하면 x.컴포넌트 함수에서 즉시 사용해야함.
  //첫번쨰 지정하는 것은 현재 상태 값.
  const [selectedTopic, setSelectedTopic] = useState(); 
  

  // TabButton 컴포넌트로 전달할 function(TabButton 컴포넌트에서 onClick 이벤트핸들러 통해 실행 된다.)
  // onSelect라는 props로 전달
  function handleSelect(selectedButton) {
    
    setSelectedTopic(selectedButton); // 컴포넌트 함수에 있는 useSate의 두번쨰 배열 -> 변경값 적용

  }

  console.log('APP COMPONENT EXECUTING');

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 동적으로 있는 배열 만큼 처리 */}
            {/* map 메서드를 활용하여 jsx로 데이터를 변환해서 표시 */}
            {/* jsx라는게 script파일 내 html이 포함된 소스 */}
            {/* 고유한 키를 가지고 있는게 좋음. => item들의 구별을 위해 */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
           
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           
             {/* 식별자를 통해 data.js의 EXAMPLES의 객체와 일치 */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton> 
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={function() {handleSelect('jsx')}}>JSX</TabButton> 
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Porps</TabButton> 
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> 
            {/* CoreConcept와 같은 방식 */}
            {/* <TabButton label="Components" /> */}
            
          </menu>
          {/* 변수에 담아서 쓰는 방법 */}
          {tabContent}

          
        </section>
      </main>
    </div>
  );
}

export default App;