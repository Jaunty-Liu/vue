<template>
<input type="text" :value="firstName" @input="$emit('update:firstName',$event.target.value)" placeholder="firstName" />
<br>
<br>
<input type="text" :value="lastName" @input="$emit('update:lastName',$event.target.value)" placeholder="lastName" />
</template>

<script>
export default {
    props: ["firstName", "lastName"]
}
</script>
