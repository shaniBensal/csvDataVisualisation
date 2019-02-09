<template>
  <div class="list">
    <div class="chart-cmp">
      <scatter-chart :data="dataToShowGraph" :labels="dataOnChart"></scatter-chart>
      <selectCMP @changeDisplay="changeDataDisplay"/>
    </div>
    <div>
      <tableCMP :data="dataTable"/>
    </div>
  </div>
</template>

<script>
import scatterChart from "./scatterChart.vue";
import tableCMP from "./tableCMP.vue";
import selectCMP from "./selectCMP.vue";
import service from "../services/service.js";
import storageService from "../services/storageService.js";

export default {
  name: "List",
  data() {
    return {
      list: [],
      dataOnChart: ["yearsCustomer", "contractValue"],
      segments: "All"
    };
  },
  created() {
    var list = storageService.loadFromStorage("JSON_LIST");
    if (list) {
      this.list = list;
    } else {
    this.getList();
    }
  },
  computed: {
    dataTable() {
      if (this.segments === "All") return this.list;
      else {
        let filteredList = this.list.filter(item => {
          return item.segment === this.segments;
        });
        return filteredList;
      }
    },
    dataToShowGraph() {
      let arr = [];
      for (var i = 0; i < this.dataTable.length; i++) {
        arr.push({
          x: this.dataTable[i][this.dataOnChart[0]],
          y: this.dataTable[i][this.dataOnChart[1]]
        });
      }
      return arr;
    }
  },
  methods: {
    getList() {
      service.getData().then(res => this.list = res);
    },
    changeDataDisplay(dataToChange, changeTo) {
      if (dataToChange === "labels") this.dataOnChart = changeTo;
      else this.segments = changeTo;
    }
  },
  components: {
    scatterChart,
    tableCMP,
    selectCMP
  }
};
</script>

<style scoped>
.list {
  display: flex;
  width: 100%;
}
.chart-cmp {
  width: 50%;
}

@media (max-width: 900px) {
  .list {
    flex-direction: column;
  }
  .chart-cmp {
    width: 100%;
  }
}
</style>
