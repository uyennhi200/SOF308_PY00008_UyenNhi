<template>
  <div :class="[isActive ? 'baseStyle' :'', 'text-center']">Hello World</div>
</template>

<script>
export default {
setup(){
    const isActive = true;
    return { isActive};
}
};
</script>

<style>
.baseStyle{
    font-size: '20px';
    border: 2px dashed darkred;
}
</style>