import {useState, Fragment} from 'react'

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
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
    // div 하나를 반환해야함.(요소 하나만을 반환해야됨. javascript에서도 return 2개 할 수 없으니까.)
    // header와 main 2개 return이 불가능함. 그래서 감싸서 전달.
    // 그래서 필요한게 Fragment(App.jsx 상단에 import 후 감싸주기) 혹은 최신저번인 경우 <>와 </>로 열고 닫아주기
    // <div>
    // <Fragment>
    <>
      <Header />
      <main>
        <CoreConcepts/>
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
    </>
    // </Fragment>
    // </div>
  );
}

export default App;