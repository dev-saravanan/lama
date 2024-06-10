CREATE TABLE users (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

CREATE TABLE projects (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE project_files (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE config_general (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    chatbot_name TEXT DEFAULT '',
    welcome_message TEXT DEFAULT '',
    input_placeholder TEXT DEFAULT ''
);

CREATE TABLE config_display (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    primary_color TEXT DEFAULT '#000000',
    font_color TEXT DEFAULT '#FFFFFF',
    font_size INTEGER DEFAULT 14,
    chat_height INTEGER DEFAULT 80,
    show_sources BOOLEAN DEFAULT TRUE,
    chat_icon_size VARCHAR DEFAULT 'medium',
    position_on_screen TEXT DEFAULT 'bottom-right',
    distance_from_bottom INTEGER DEFAULT 20,
    horizontal_distance INTEGER DEFAULT 20,
    bot_icon_path TEXT DEFAULT ''
);

