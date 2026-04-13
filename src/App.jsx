import {useState} from 'react'

import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';




function App() {

  //component 함수에서 최상위에서 사용(if, for로 감싸지 말 것.), handleSelected 같은 내부 함수에서 호출하면 x.컴포넌트 함수에서 즉시 사용해야함.
  //첫번쨰 지정하는 것은 현재 상태 값.
  // const [selectedTopic, setSelectedTopic] = useState('components'); 
  const [selectedTopic, setSelectedTopic] = useState(); 
  

  // TabButton 컴포넌트로 전달할 function(TabButton 컴포넌트에서 onClick 이벤트핸들러 통해 실행 된다.)
  // onSelect라는 props로 전달
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton); // 컴포넌트 함수에 있는 useSate의 두번쨰 배열 -> 변경값 적용
    console.log(selectedTopic); // 최신 값이 아닌 상태 변경 요청한 이후 이전 값이 찍힘.

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
            <CoreConcept 
              // props : 직접 데이터/함수 전달 
              // title="Components"
              // description="The Core UI building block"
              // img={componentImg}

              // data.js의 데이터를 배열 값을 참조해서 전달
              // title={CORE_CONCEPTS[0].title}
              // description={CORE_CONCEPTS[0].description}
              // image={CORE_CONCEPTS[0].image}

              // key value 값을 같이 그대로 전달(잘라서 전달))
               {...CORE_CONCEPTS[0]}
              />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <li><button></button></li> */}
            {/* <TabButton /> */}
            {/* 내용을 childeren pros(파라미터 느낌) 로 보내 변수로 활용이 가능하다 */}
            {/* CoreConcept 과 다르게 태그로 감싸서 하는거 컴포넌트 합성이라고 함 */}
            {/* <TabButton onSelect={handleSelect}>Components</TabButton>  */}

            {/* 익명 함수, function() {} 이런식으로 한번 감싸서 호출해서
             파라미터를 함수에 넘길 수 있음. 그럼 그걸 props로 component로 넘어감 */}
             {/* 식별자를 통해 data.js의 EXAMPLES의 객체와 일치 */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton> 
            <TabButton onSelect={function() {handleSelect('jsx')}}>JSX</TabButton> 
            <TabButton onSelect={() => handleSelect('props')}>Porps</TabButton> 
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton> 
            {/* CoreConcept와 같은 방식 */}
            {/* <TabButton label="Components" /> */}
            
          </menu>
          
          {/* Dynamic Content */}
          {/* let tabContent 로 선언한 동적 값을 그대로 출력 */}
          {/* {tabContent}   */}
          {/* {selectedTopic} */}

          {/* &&를 써서 참일때 값이 바로 나오도록도 가능. null 생략이 가능하다. */}
          {/* {!selectedTopic ? <p>Please select a topic.</p> : null} */}
          {/* {!selectedTopic && <p>Please Select a topic.</p>} */}
          {/* {selectedTopic && (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
          )} */}

          {/* 삼항 연산자를 통해 값이 state의 값이 있을때와 없을때를 처리 */}
            {/* {!selectedTopic ? <p>Please select a topic.</p> : 
              (
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
            }  */}

          {/* 변수에 담아서 쓰는 방법 */}
          {tabContent}

          
        </section>
      </main>
    </div>
  );
}

export default App;