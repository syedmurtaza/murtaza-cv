import { module, test } from 'qunit';
import { setupRenderingTest } from 'murtaza-cv/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | experience/experience', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Experience::Experience />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Experience::Experience>
        template block text
      </Experience::Experience>
    `);

    assert.dom().hasText('template block text');
  });
});
