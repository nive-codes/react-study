import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';





function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              // props : 직접 데이터 전달 
              // title="Components"
              // description="The Core UI building block"
              // img={componentImg}

              // data.js의 데이터를 배열 값을 참조해서 전달
              // title={CORE_CONCEPTS[0].title}
              // description={CORE_CONCEPTS[0].description}
              // image={CORE_CONCEPTS[0].image}

              // key value 값을 같이 그대로 전달 
               {...CORE_CONCEPTS[0]}
              />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;