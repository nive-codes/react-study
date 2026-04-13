import {CORE_CONCEPTS} from '../data.js';
import CoreConcept from "./CoreConcept.jsx"
export default function CoreConcepts(){
    return (
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
    )
}