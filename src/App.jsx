import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

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
        <Examples/>
      </main>
    </>
    // </Fragment>
    // </div>
  );
}

export default App;