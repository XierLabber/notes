<script>
export default {
    data() {
        return {
            text: 'Edit me', 
            checked: true, 
            checkedNames: ['Jack'], 
            picked: "One", 
            selected: 'A', 
            multiSelected: ['A']
        }
    }
}
</script>

<template>
    <h2> Text Input </h2>
    <input v-model="text"> {{text}}

    <h2> Checkbox </h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox"> Checked: {{checked}} </label>

    <h2> Multi Checkbox </h2>
    <input type="checkbox" id="Jack" value="Jack" v-model="checkedNames">
    <label for="Jack"> Jack </label>
    <input type="checkbox" id="John" value="John" v-model="checkedNames">
    <label for="John"> John </label>
    <input type="checkbox" id="Mike" value="Mike" v-model="checkedNames">
    <label for="Mike"> Mike </label>
    <p> checked Names:  <pre> {{checkedNames}} </pre> </p>

    <h2> Radio </h2>
    <input type="radio" id="one" value="One" v-modle="picked">
    <label for="one"> One </label>
    <br>
    <input type="radio" id="two" value="Two" v-modle="picked">
    <label for="two"> Two </label>
    <br>
    <span> Picked: {{picked}} </span>

    <h2> Select </h2>
    <select v-model="selected">
        <option disabled value=""> Please select one</option>
        <option> A </option>
        <option> B </option>
        <option> C </option>
    </select>
    <span> Selected: {{selected}} </span>

</template>