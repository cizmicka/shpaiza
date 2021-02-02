import { shallowMount } from '@vue/test-utils';
import SampleComponent from '@/components/SampleComponent.vue';

describe('SampleComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(SampleComponent, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
