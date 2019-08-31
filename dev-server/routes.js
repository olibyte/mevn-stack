import taskRoutes from './api/task/tasks-routes';

export function registerRoutes(app) {
    app.use('/api', taskRoutes);
}