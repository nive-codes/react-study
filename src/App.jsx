import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';





function App() {

  // TabButton 컴포넌트로 전달할 function(TabButton 컴포넌트에서 onClick 이벤트핸들러 통해 실행 된다.)
  // onSelect라는 props로 전달
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    console.log(selectedButton)
    console.log("Hello World- Selected!")
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

            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton> 
            <TabButton onSelect={handleSelect}>JSX</TabButton> 
            <TabButton onSelect={handleSelect}>Porps</TabButton> 
            <TabButton onSelect={handleSelect}>State</TabButton> 
            {/* CoreConcept와 같은 방식 */}
            {/* <TabButton label="Components" /> */}
            
          </menu>
          Dynamic Content

        </section>
      </main>
    </div>
  );
}

export default App;