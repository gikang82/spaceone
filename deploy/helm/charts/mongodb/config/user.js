db.auth('admin','password')
db = db.getSiblingDB('identity')
db.createUser(
        {
                    user: "identity_user",
                    pwd: "identity_password",
                    roles: [ {role: "readWrite", db: "identity" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('secret')
db.createUser(
        {
                    user: "secret_user",
                    pwd: "secret_password",
                    roles: [ {role: "readWrite", db: "secret" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('repository')
db.createUser(
        {
                    user: "repository_user",
                    pwd: "repository_password",
                    roles: [ {role: "readWrite", db: "repository" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('plugin')
db.createUser(
        {
                    user: "plugin_user",
                    pwd: "plugin_password",
                    roles: [ {role: "readWrite", db: "plugin" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('config')
db.createUser(
        {
                    user: "config_user",
                    pwd: "config_password",
                    roles: [ {role: "readWrite", db: "config" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('inventory')
db.createUser(
        {
                    user: "inventory_user",
                    pwd: "inventory_password",
                    roles: [ {role: "readWrite", db: "inventory" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('monitoring')
db.createUser(
        {
                    user: "monitoring_user",
                    pwd: "monitoring_password",
                    roles: [ {role: "readWrite", db: "monitoring" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('statistics')
db.createUser(
        {
                    user: "statistics_user",
                    pwd: "statistics_password",
                    roles: [ {role: "readWrite", db: "statistics" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('billing')
db.createUser(
        {
                    user: "billing_user",
                    pwd: "billing_password",
                    roles: [ {role: "readWrite", db: "billing" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('notification')
db.createUser(
        {
                    user: "notification_user",
                    pwd: "notification_password",
                    roles: [ {role: "readWrite", db: "notification" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('cost_saving')
db.createUser(
        {
                    user: "cost_saving_user",
                    pwd: "cost_saving_password",
                    roles: [ {role: "readWrite", db: "cost_saving" } ]
                }
);

db.auth('admin','password')
db = db.getSiblingDB('power_scheduler')
db.createUser(
        {
                    user: "power_scheduler_user",
                    pwd: "power_scheduler_password",
                    roles: [ {role: "readWrite", db: "power_scheduler" } ]
                }
);
db.auth('admin','password')
db = db.getSiblingDB('spot_automation')
db.createUser(
        {
                    user: "spot_automation_user",
                    pwd: "spot_automation_password",
                    roles: [ {role: "readWrite", db: "spot_automation" } ]
                }
);

