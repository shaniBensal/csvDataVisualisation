<template>
  <div>
    <div class="select-div">
      <label>Values on Graph</label>
      <select v-model="selectedLables" name="labelsToShow">
        <option
          v-for="(labels,index) in labelsOptions"
          :key="keys[index+5]"
          :value="labels"
        >x: {{ labels[0] }}, y: {{labels[1]}}</option>
      </select>
    </div>
    <div class="select-div">
      <label>Segments to show</label>
      <select v-model="selectedSegments" name="segmentsToShow">
        <option
          v-for="(option,index) in segmentsOptions"
          :key="keys[index]"
          :value="option"
        >{{option}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      segmentsOptions: ["All", "1", "2", "3", "4", "5"],
      keys: ["A", "B", "C", "D", "E", "a", "b", "c"],
      labelsOptions: [
        ["noOfComplaints", "contractValue"],
        ["yearsCustomer", "noOfComplaints"],
        ["yearsCustomer", "contractValue"]
      ],
      selectedLables: ["yearsCustomer", "contractValue"],
      selectedSegments: "All"
    };
  },
  watch: {
    selectedLables() {
      this.$emit("changeDisplay", "labels", this.selectedLables);
    },
    selectedSegments() {
      this.$emit("changeDisplay", "segments", this.selectedSegments);
    }
  }
};
</script>

<style>
label {
  margin: 10px 0px;
}

.select-div {
  margin: 10px 0px;
}
</style>
