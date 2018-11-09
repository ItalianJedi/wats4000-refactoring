<!-- Attempt at a stretch goal -->
<template>
    <div>
        <h3>{{ forecast.dt|formatDate }}</h3>
    </div>
</template>

<script>
import {API} from '@/common/api';
import WeatherSummary from '@/components/WeatherSummary';
import WeatherData from '@/components/WeatherData';
import ErrorsList from '@/components/ErrorsList';
import FormatDate from '@/components/FormatDate';

export default {
  name: 'FormatDate',
  data () {
    return {
    }
  },
  props: {
      formatDate: []
  }
}    
}
</script>

<style lang="sass">

</style>
