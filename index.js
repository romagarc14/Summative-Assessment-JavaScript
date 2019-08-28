class HeaderComponent {
    template = `
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4">My Favorite Books</h1>
    </div>
    </div>`
}

class BookComponent {
    constructor (title, image) {
        this.title = title;
        this.image = image;
        this.template = `
        <div class="card" style="width: 16rem;">
        <img class="card-img-top" src="images/${this.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <button class="btn btn-primary">Show Description</button>
        </div>
      </div>`
    }
}

class DescriptionDisplayComponent {
    template = `
        <h3>Description</h3>
        ${new DescriptionComponent().template}`
}

class DescriptionComponent {
    template = `
        <h6 id="story"></h6>
        `
}

class BookListComponent {
    bookList = [
        {"title": "Animal Farm", "image": "animalfarm.jpg"},
        {"title": "Cat's Cradle", "image": "catscradle.jpg"},  
        {"title": "I, Claudius", "image": "iclaudius.jpg"}, 
        {"title": "Oliver Twist", "image": "olivertwist.jpg"}, 
        {"title": "Tortilla Flat", "image": "tortillaflat.jpg"}
            
        ]
        
        template = `
            <div>
                ${this.bookList.map(book => new BookComponent(book.title, book.image).template).join('')}
            </div>
            `
        }

        var descripArr = [
        "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned--a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell's masterpiece have a meaning and message still ferociously fresh.",
        "Cat's Cradle is Kurt Vonnegut's satirical commentary on modern man and his madness. An apocalyptic tale of this planet's ultimate fate, it features a midget as the protagonist, a complete, original theology created by a calypso singer, and a vision of the future that is at once blackly fatalistic and hilariously funny. A book that left an indelible mark on an entire generation of readers, Cat's Cradle is one of the twentieth century's most important works--and Vonnegut at his very best.",
        "Despised for his weakness and regarded by his family as little more than a stammering fool, the nobleman Claudius quietly survives the intrigues, bloody purges and mounting cruelty of the imperial Roman dynasties. In I, Claudius he watches from the sidelines to record the reigns of its emperors--from the wise Augustus and his villainous wife Livia to the sadistic Tiberius and the insane excesses of Caligula. Written in the form of Claudius' autobiography, this is the first part of Robert Graves's brilliant account of the madness and debauchery of ancient Rome, and stands as one of the most celebrated, gripping historical novels ever written.",
        "After running away from the workhouse and pompous beadle Mr Bumble, Oliver finds himself lured into a den of thieves peopled by vivid and memorable characters--the Artful Dodger, vicious burglar Bill Sikes, his dog Bull's Eye, and prostitute Nancy, all watched over by cunning master-thief Fagin. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery.",
        "Adopting the structure and themes of the Arthurian legend, John Steinbeck created a 'Camelot' on a shabby hillside above the town of Monterey, California, and peopled it with a colorful band of knights. At the center of the tale is Danny, whose house, like Arthur's castle, becomes a gathering place for men looking for adventure, camaraderie, and a sense of belonging--men who fiercely resist the corrupting tide of honest toil and civil rectitude."
        ]

        var x = document.getElementsByClassName("btn")
        document.addEventListener("click", function (e) {
            if (e.target && e.target == x[0]) {
                if (x[0].innerText == "Show Description") {
                     document.getElementById("story").innerText = descripArr[0]
                    x[0].innerText = "Hide Description"
                    x[0].className = "btn btn-danger"; 
                } else {
                    document.getElementById("story").innerText = "";
                    x[0].innerText = "Show Description"
                    x[0].className = "btn btn-primary"; 
                } 
            }
            if (e.target && e.target == x[1]) {
                if (x[1].innerText == "Show Description") {
                     document.getElementById("story").innerText = descripArr[1]
                    x[1].innerText = "Hide Description"
                    x[1].className = "btn btn-danger";    
                } else {
                    document.getElementById("story").innerText = "";
                    x[1].innerText = "Show Description"
                    x[1].className = "btn btn-primary"; 
                }
            }
            if (e.target && e.target == x[2]) {
                if (x[2].innerText == "Show Description") {
                     document.getElementById("story").innerText = descripArr[2]
                    x[2].innerText = "Hide Description"
                    x[2].className = "btn btn-danger"; 
                } else {
                    document.getElementById("story").innerText = "";
                    x[2].innerText = "Show Description"
                    x[2].className = "btn btn-primary"; 
                }
            }
            if (e.target && e.target == x[3]) {
                if (x[3].innerText == "Show Description") {
                     document.getElementById("story").innerText = descripArr[3]
                    x[3].innerText = "Hide Description"
                    x[3].className = "btn btn-danger";
                } else {
                    document.getElementById("story").innerText = "";
                    x[3].innerText = "Show Description"
                    x[3].className = "btn btn-primary"; 
                }
            }
            if (e.target && e.target == x[4]) {
                if (x[4].innerText == "Show Description") {
                     document.getElementById("story").innerText = descripArr[4]
                    x[4].innerText = "Hide Description"
                    x[4].className = "btn btn-danger";
                } else {
                    document.getElementById("story").innerText = "";
                    x[4].innerText = "Show Description"
                    x[4].className = "btn btn-primary"; 
                }   
            }
         })

    class Container {
        template = `
            <div>
                ${new HeaderComponent().template}
            </div>
            <div class="card-group">
                ${new BookListComponent().template}
            </div>   
            <div class="container-fluid">
                ${new DescriptionDisplayComponent().template}
                <br>
            </div>`
    }

    document.getElementById("root").innerHTML = new Container().template




   