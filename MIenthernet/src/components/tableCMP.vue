<template>
  <table>
    <table>
      <thead>
        <th>Gender</th>
        <th>Segment</th>
        <th>Years Customer</th>
        <th>
          Complains Amount
          <button @click="sortDataByComplains">Sort</button>
        </th>
        <th>Contract Value</th>
      </thead>
      <tbody>
        <tr v-for="item in dataToShow" :key="item.id">
          <td>{{item.gender}}</td>
          <td>{{item.segment}}</td>
          <td>{{item.yearsCustomer}}</td>
          <td>{{item.noOfComplaints}}</td>
          <td>{{item.contractValue}}</td>
        </tr>
      </tbody>
    </table>
  </table>
</template>

<script>
export default {
  props: ["data"],
  created() {
    this.updateData();
  },
  data() {
    return {
      dataToShow: []
    };
  },
  methods: {
    updateData() {
      this.dataToShow = this.data;
    },
    sortDataByComplains() {
      this.dataToShow = this.dataToShow.sort((a, b) => {
        return a.noOfComplaints - b.noOfComplaints;
      });
    }
  },
  watch: {
    data() {
      this.updateData();
    }
  }
};
</script>

<style>
th,
td {
  border: 1px solid #ddd;
  padding: 6px;
}

th {
  padding: 10px;
}
</style>
