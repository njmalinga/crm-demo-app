import DS from 'ember-data';
import ENV from '../config/environment';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
  host: ENV.APP.API_HOST,
  namespace: ENV.APP.API_NAMESPACE,
});
