import { createPortal } from "react-dom";

/**
 Portails : permet de téléporter des élements à des endroits spécifiques dans le DOM 
 Ex : 
    - Boite modal
    - Notifications
    - Système dialogues
 */
function Portails() {
    return <div style={{
        height: 300,
        overflowY: 'scroll',
        background: '#EEE',
        margin: 20,
        position: 'relative'
    }}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur necessitatibus doloribus, alias ex dolorem sequi accusamus fugiat voluptate placeat quaerat dignissimos ullam. Voluptatibus, veritatis quasi! Eligendi incidunt perferendis, quod alias sapiente laudantium reiciendis officia. Tenetur, harum corporis nemo commodi quod numquam aliquid labore, nesciunt modi exercitationem dolores quaerat perferendis deserunt.</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur necessitatibus doloribus, alias ex dolorem sequi accusamus fugiat voluptate placeat quaerat dignissimos ullam. Voluptatibus, veritatis quasi! Eligendi incidunt perferendis, quod alias sapiente laudantium reiciendis officia. Tenetur, harum corporis nemo commodi quod numquam aliquid labore, nesciunt modi exercitationem dolores quaerat perferendis deserunt.</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur necessitatibus doloribus, alias ex dolorem sequi accusamus fugiat voluptate placeat quaerat dignissimos ullam. Voluptatibus, veritatis quasi! Eligendi incidunt perferendis, quod alias sapiente laudantium reiciendis officia. Tenetur, harum corporis nemo commodi quod numquam aliquid labore, nesciunt modi exercitationem dolores quaerat perferendis deserunt.</p>
        <Modal/>
    </div>
}
function Modal() {

    return createPortal(<div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        border: 'solid 1px grey',
        background: '#FFF'
    }}>
        Je suis une modale
    </div>, document.body)
}
export default Portails;