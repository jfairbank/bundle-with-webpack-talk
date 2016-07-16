if (process.env.NODE_ENV !== 'production') {
  console.log('DEBUG MESSAGE');
}

if (__DEV__) {
  console.log('IN DEVELOPMENT MODE');
}

if (NEW_FEATURE) {
  newFeature.run();
}
