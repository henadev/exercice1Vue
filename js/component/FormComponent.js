const FormComponent={
    template:`
        <form action="">
            <fieldset>
                <legend>Leave a review</legend>

                <label for="name">Name : </label>
                <input v-model="name" type="text" id="name"><br>

                <label for="review">Review : </label>
                <textarea   v-model="review"name="review" id="review"  rows="4"></textarea><br>

                <label for="rating">Rating ({{ rating }}): </label>
                <input  v-model="rating" type="range" min="1" max="5" value="3" id="rating"><br>

                <input type="submit" value="Submit">
            </fieldset>
        </form>
        <span>Name: <strong> {{ name }} </strong><br>
        <span>Review: <strong> {{ review }} </strong><br>
        <span>Rating: <strong> {{ rating }} </strong>`,
        data(){
            return{
                name:"",
                review:"",
                rating:""
            }
        }
}


export default FormComponent